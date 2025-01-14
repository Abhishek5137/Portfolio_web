import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Contact() {
  return (
    <section id="contact" className="container py-24 ">
      <Card className="mx-auto max-w-lg hover:shadow-rose-500 ">
        <CardHeader>
          <CardTitle>Contact Me</CardTitle>
          <CardDescription>
            Feel free to reach out for collaborations or just a friendly hello
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <Input placeholder="Name" />
            <Input type="email" placeholder="Email" />
            <Textarea placeholder="Message" />
            <Button type="submit" className="w-full ">
              Send Message
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  )
}