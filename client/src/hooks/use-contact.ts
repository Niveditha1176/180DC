import { useMutation } from "@tanstack/react-query";
import { api, type InsertContactRequest } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useCreateContactRequest() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertContactRequest) => {
      // Validate data with schema before sending (double check)
      const validated = api.contact.create.input.parse(data);
      
      const res = await fetch(api.contact.create.path, {
        method: api.contact.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
      });

      if (!res.ok) {
        // Try to parse error message
        try {
          const errorData = await res.json();
          // Check if it matches our validation error schema
          const validationError = api.contact.create.responses[400].safeParse(errorData);
          if (validationError.success) {
            throw new Error(validationError.data.message);
          }
        } catch (e) {
          // Fallback if parsing fails or it's not a validation error
        }
        throw new Error("Failed to submit request");
      }

      return api.contact.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Your message has been sent successfully!",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });
}
