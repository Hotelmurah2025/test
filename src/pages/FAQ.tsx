import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How do I book a tour?",
      answer: "You can book a tour by browsing our available tours, selecting your preferred date and number of participants, and completing the checkout process. We accept various payment methods for your convenience."
    },
    {
      question: "What is your cancellation policy?",
      answer: "Our standard cancellation policy allows for full refunds if cancelled at least 48 hours before the tour start time. Cancellations within 48 hours may be subject to partial or no refund, depending on the specific tour policy."
    },
    {
      question: "Are the tours guided?",
      answer: "Yes, most of our tours are led by professional, licensed guides who are knowledgeable about the local history, culture, and attractions. They speak English and often other languages as well."
    },
    {
      question: "What should I bring on the tour?",
      answer: "We recommend bringing comfortable walking shoes, weather-appropriate clothing, a camera, and water. Specific tour requirements will be listed in the tour details."
    },
    {
      question: "Do you offer private tours?",
      answer: "Yes, we offer private tour options for most of our regular tours. Private tours can be customized to your preferences and schedule. Contact us for more information."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Frequently Asked Questions</h1>
      
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible>
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
