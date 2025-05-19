import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

// Define form schema with Zod
const newsletterSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address' }),
})

type NewsletterFormValues = z.infer<typeof newsletterSchema>

export const NewsletterForm = () => {
  const form = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: '',
    },
  })

  const onSubmit = (data: NewsletterFormValues) => {
    // Handle form submission
    console.log('Form submitted:', data)
    // Add your API call here
    // await fetch('/api/newsletter', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(data),
    // });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full items-center justify-center gap-2"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormControl>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email address..."
                  autoComplete="email"
                  className="border-1 border-[#555555]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="cursor-pointer rounded-full bg-white text-black hover:bg-black hover:text-white"
        >
          Subscribe
        </Button>
      </form>
    </Form>
  )
}
