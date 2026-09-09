import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Tailwind,
} from "react-email";

interface ContactThankYouEmailProps {
  name: string;
}

export default function ContactThankYouEmail({
  name,
}: ContactThankYouEmailProps) {
  return (
    <Html lang="en" dir="ltr">
      <Head />

      <Preview>
        Thanks for reaching out to Khethiwe Creatives.
      </Preview>

      <Tailwind>
        <Body className="bg-[#f4f0ee] font-sans py-[40px]">
          <Container className="mx-auto max-w-[600px] bg-white p-[40px]">
            <Section>
              <Text className="text-[11px] uppercase tracking-[2px] text-[#4f301d] m-0">
                Khethiwe Creatives
              </Text>

              <Heading className="mt-[20px] text-[30px] font-normal leading-[36px] text-black">
                Thanks for reaching out, {name}.
              </Heading>
            </Section>

            <Section className="mt-[24px]">
              <Text className="text-[15px] leading-[26px] text-[#444]">
                We've received your enquiry and appreciate you taking the
                time to tell us about what you're working on.
              </Text>

              <Text className="text-[15px] leading-[26px] text-[#444]">
                We'll review the details and get back to you within 1–2
                business days.
              </Text>

              <Text className="text-[15px] leading-[26px] text-[#444]">
                If your enquiry is urgent, you can contact us directly at
                khethiwecreatives@gmail.com
              </Text>
            </Section>

            <Section className="mt-[40px] border-t border-solid border-[#e5e5e5] pt-[24px]">
              <Text className="text-[15px] text-black m-0">
                Khethiwe Creatives
              </Text>

              <Text className="text-[12px] text-[#999] m-0 mt-[6px]">
                Evolve Freely.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}