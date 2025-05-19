import { useState } from 'react'
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
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const form = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: '',
    },
  })

  const onSubmit = async (data: NewsletterFormValues) => {
    setIsSubmitting(true)
    setError(null)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 800))
      
      // Uncomment for actual API implementation
      // const response = await fetch('/api/newsletter', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data),
      // })
      // 
      // if (!response.ok) {
      //   throw new Error('Failed to subscribe to the newsletter')
      // }
      
      setIsSuccess(true)
      form.reset()
    } catch (err) {
      setError('Failed to subscribe. Please try again later.')
      console.error('Newsletter submission error:', err)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="w-full rounded-md bg-green-50/10 p-4 text-center" role="status" aria-live="polite">
        <p className="text-white">Thank you for subscribing to our newsletter!</p>
        <button 
          onClick={() => setIsSuccess(false)} 
          className="mt-2 text-sm text-white underline"
          aria-label="Subscribe with another email address"
        >
          Subscribe with another email
        </button>
      </div>
    )
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full items-center justify-center gap-2"
        aria-label="Newsletter signup form"
        noValidate
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
                  aria-label="Email address"
                  aria-describedby={error ? "newsletter-error" : undefined}
                  disabled={isSubmitting}
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
          disabled={isSubmitting}
          aria-busy={isSubmitting}
        >
          {isSubmitting ? 'Subscribing...' : 'Subscribe'}
        </Button>
      </form>
      
      {error && (
        <div 
          id="newsletter-error"
          className="mt-2 text-center text-sm text-red-400" 
          role="alert"
        >
          {error}
        </div>
      )}
    </Form>
  )
}
