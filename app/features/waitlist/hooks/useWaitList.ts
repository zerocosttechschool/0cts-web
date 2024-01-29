import { useToast } from "@/app/components/ui/use-toast";
import { useCreateWaitList } from "@/app/services/waitlist/hooks/useCreateWaitList";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { waitListSchema } from "../utils/zodSchema";

export const useWaitList = () => {
  const { toast } = useToast();

  const defaultValues = {
    email: "",
  };

  const form = useForm<z.infer<typeof waitListSchema>>({
    resolver: zodResolver(waitListSchema),
    defaultValues,
  });

  const { formState, reset } = form;

  const { isSubmitting, errors } = formState;

  const { mutateAsync } = useCreateWaitList();

  const onSubmit = async (values: z.infer<typeof waitListSchema>) => {
    try {
      await mutateAsync(values);

      reset(defaultValues);

      toast({
        description: "Thank you for your participation. 😁",
      });
    } catch (error: unknown) {
      toast({
        description: "Oops! something wrong happened. Please try again.",
      });
    }
  };

  return {
    isSubmitting,
    onSubmit,
    form,
    errors,
  };
};
