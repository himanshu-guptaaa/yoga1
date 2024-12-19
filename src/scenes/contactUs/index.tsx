import { useForm, SubmitHandler } from "react-hook-form";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import ContactUsPageGraphic from "../../assets/ContactUsPageGraphаic.webp";
import HText from "@/shared/HText";

interface ContactUsProps {
  setSelectedPage: (page: SelectedPage) => void;
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactUs: React.FC<ContactUsProps> = ({ setSelectedPage }) => {
  const inputStyles = `mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-[#ff9548]`;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const { name, email, message } = data;
    const adminPhoneNumber = "919521692857"; // Admin's WhatsApp number

    const whatsappMessage = `Hello! You have a new contact form submission:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappURL = `https://wa.me/${adminPhoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>
            <span className="text-primary-500">JOIN US</span> TO GET IN SHAPE
          </HText>
          <p className="my-5">
            Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl
            sapien vel rhoncus. Placerat at in enim pellentesque. Nulla adipiscing leo
            egestas nisi elit risus sit. Nunc cursus sagittis.
          </p>
        </motion.div>
        <div className="mt-10 justify-between gap-14 md:flex flex-row-reverse">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                className={inputStyles}
                type="text"
                placeholder="NAME"
                {...register("name", {
                  required: "This field is required.",
                  maxLength: { value: 100, message: "Max length is 100 characters." },
                })}
              />
              {errors.name && (
                <p className="mt-1 text-primary-500">{errors.name.message}</p>
              )}
              <input
                className={inputStyles}
                type="text"
                placeholder="EMAIL"
                {...register("email", {
                  required: "This field is required.",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address.",
                  },
                })}
              />
              {errors.email && (
                <p className="mt-1 text-primary-500">{errors.email.message}</p>
              )}
              <textarea
                className={inputStyles}
                placeholder="MESSAGE"
                rows={4}
                cols={50}
                {...register("message", {
                  required: "This field is required.",
                  maxLength: { value: 2000, message: "Max length is 2000 characters." },
                })}
              />
              {errors.message && (
                <p className="mt-1 text-primary-500">{errors.message.message}</p>
              )}
              <button
                type="submit"
                className="mt-5 rounded-lg bg-primary-300 text-[#ff9548] px-20 py-3 transition duration-500 hover:text-white"
              >
                SUBMIT
              </button>
            </form>
          </motion.div>
          <motion.div
            className="relative mt-16 basis-2/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="w-full before:absolute before:-bottom-24 before:left-[350px] before:z-[-1] xl:before:content-evolvetext sm:flex sm:justify-center">
              <img
                className="w-full rounded-3xl sm:h-[450px] sm:w-[400px]"
                alt="contact-us"
                src={ContactUsPageGraphic}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
