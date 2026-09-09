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

interface ContactNotificationEmailProps {
  name: string;
  email: string;
  projectType: string;
  message: string;
  referral?: string;
}

export default function ContactNotificationEmail({
  name,
  email,
  projectType,
  message,
  referral,
}: ContactNotificationEmailProps) {
  return (
    <Html lang="en" dir="ltr">
      <Head />

      <Preview>
        New {projectType} enquiry from {name}
      </Preview>

      <Tailwind>
        <Body className="bg-[#f4f0ee] font-sans py-[40px]">
          <Container className="mx-auto max-w-[600px] bg-white p-[40px]">
            <Section>
              <Text className="text-[11px] uppercase tracking-[2px] text-[#4f301d] m-0">
                Khethiwe Creatives
              </Text>

              <Heading className="mt-[20px] text-[30px] font-normal leading-[36px] text-black">
                New project enquiry.
              </Heading>

              <Text className="text-[15px] leading-[24px] text-[#555]">
                Someone has submitted a new enquiry through the Khethiwe
                Creatives website.
              </Text>
            </Section>

            <Section className="mt-[32px] border-t border-solid border-[#e5e5e5] pt-[24px]">
              <Text className="text-[11px] uppercase tracking-[1.5px] text-[#999] m-0">
                Contact
              </Text>

              <Text className="text-[15px] leading-[24px] text-black mb-0">
                <strong>Name:</strong> {name}
              </Text>

              <Text className="text-[15px] leading-[24px] text-black mb-0">
                <strong>Email:</strong> {email}
              </Text>

              <Text className="text-[15px] leading-[24px] text-black mb-0">
                <strong>Project type:</strong> {projectType}
              </Text>

              {referral && (
                <Text className="text-[15px] leading-[24px] text-black mb-0">
                  <strong>How they heard about us:</strong> {referral}
                </Text>
              )}
            </Section>

            <Section className="mt-[32px] border-t border-solid border-[#e5e5e5] pt-[24px]">
              <Text className="text-[11px] uppercase tracking-[1.5px] text-[#999] m-0">
                Project details
              </Text>

              <Text className="text-[15px] leading-[26px] text-[#333] whitespace-pre-line">
                {message}
              </Text>
            </Section>

            <Section className="mt-[40px] border-t border-solid border-[#e5e5e5] pt-[24px]">
              <Text className="text-[12px] text-[#999] m-0">
                Submitted through the Khethiwe Creatives website.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}