import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().trim().min(1, { message: "Please enter your name" }).max(100, { message: "Name must be under 100 characters" }),
  email: z.string().trim().email({ message: "Please enter a valid email address" }).max(255, { message: "Email must be under 255 characters" }),
  subject: z.string().trim().max(150, { message: "Subject must be under 150 characters" }),
  message: z.string().trim().min(1, { message: "Please write a message" }).max(2000, { message: "Message must be under 2000 characters" }),
});

type FormValues = z.infer<typeof contactSchema>;

const emptyForm: FormValues = { name: "", email: "", subject: "", message: "" };

export const ContactForm = () => {
  const [values, setValues] = useState<FormValues>(emptyForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (field: keyof FormValues) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValues((prev) => ({ ...prev, [field]: e.target.value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = contactSchema.safeParse(values);
    if (!parsed.success) {
      const fieldErrors = parsed.error.flatten().fieldErrors;
      setErrors({
        name: fieldErrors.name?.[0],
        email: fieldErrors.email?.[0],
        subject: fieldErrors.subject?.[0],
        message: fieldErrors.message?.[0],
      });
      return;
    }

    setSubmitting(true);
    const { error } = await supabase.from("contact_messages").insert({
      name: parsed.data.name,
      email: parsed.data.email,
      subject: parsed.data.subject || null,
      message: parsed.data.message,
    });
    setSubmitting(false);

    if (error) {
      toast({
        title: "Message not sent",
        description: "Something went wrong. Please try again or email me directly.",
        variant: "destructive",
      });
      return;
    }

    setValues(emptyForm);
    toast({
      title: "Message sent",
      description: "Thanks for reaching out — I'll get back to you soon.",
    });
  };

  return (
    <Card className="card-hover p-8">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-primary mb-2">Send Me a Message</h3>
        <p className="text-muted-foreground">
          Fill in the form and your message will land straight in my inbox.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        <div className="grid sm:grid-cols-2 gap-5">
          <div className="space-y-2">
            <Label htmlFor="contact-name">Name</Label>
            <Input
              id="contact-name"
              value={values.name}
              onChange={handleChange("name")}
              placeholder="Your name"
              maxLength={100}
              aria-invalid={!!errors.name}
            />
            {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="contact-email">Email</Label>
            <Input
              id="contact-email"
              type="email"
              value={values.email}
              onChange={handleChange("email")}
              placeholder="you@example.com"
              maxLength={255}
              aria-invalid={!!errors.email}
            />
            {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="contact-subject">Subject (optional)</Label>
          <Input
            id="contact-subject"
            value={values.subject}
            onChange={handleChange("subject")}
            placeholder="What is this about?"
            maxLength={150}
            aria-invalid={!!errors.subject}
          />
          {errors.subject && <p className="text-sm text-destructive">{errors.subject}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="contact-message">Message</Label>
          <Textarea
            id="contact-message"
            value={values.message}
            onChange={handleChange("message")}
            placeholder="Tell me about your project or opportunity..."
            rows={5}
            maxLength={2000}
            aria-invalid={!!errors.message}
          />
          {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
        </div>

        <Button type="submit" variant="hero" size="lg" className="w-full group" disabled={submitting}>
          <Send className="w-5 h-5 group-hover:scale-110 transition-transform" />
          {submitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </Card>
  );
};
