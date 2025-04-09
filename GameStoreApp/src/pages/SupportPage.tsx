import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { useState } from "react";

const SupportPage = () => {
  const [sent, setSent] = useState(false);
  const [isSending, setIsSending] = useState(false);


  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Вкажіть ім’я"),
    email: Yup.string().email("Некоректна пошта").required("Вкажіть email"),
    subject: Yup.string().required("Вкажіть тему"),
    message: Yup.string().required("Напишіть повідомлення"),
  });

  const handleSubmit = (values: typeof initialValues, { resetForm }: any) => {
    setIsSending(true); // Показати спінер
  
    const serviceID = "service_adqn9uo";
    const templateID = "template_cz8xreq";
    const publicKey = "tMcR_SLbo1jZiNx9D";
  
    emailjs
      .send(serviceID, templateID, values, publicKey)
      .then(() => {
        setSent(true);
        resetForm();
      })
      .catch((error) => {
        console.error("Помилка надсилання:", error);
      })
      .finally(() => {
        setIsSending(false); // Приховати спінер
      });
  };
  

  return (
    <div className="bg-black mt-[160px] min-h-screen px-6 py-10 md:px-10 border-b-4 border-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto border-l-4 border-lime-500 pl-6"
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-lime-500">
          Служба підтримки
        </h1>

        {!sent ? (
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className="space-y-6">
              {["name", "email", "subject", "message"].map((field) => (
                <div key={field}>
                  <label className="block text-white mb-1 capitalize">
                    {field === "message" ? "Повідомлення" : field === "name" ? "Ім’я" : field}
                  </label>
                  {field !== "message" ? (
                    <Field
                      name={field}
                      type={field === "email" ? "email" : "text"}
                      className="w-full px-4 py-2 bg-black border border-lime-500 text-white rounded outline-none focus:ring-2 focus:ring-lime-500"
                    />
                  ) : (
                    <Field
                      as="textarea"
                      rows={5}
                      name="message"
                      className="w-full px-4 py-2 bg-black border border-lime-500 text-white rounded outline-none focus:ring-2 focus:ring-lime-500"
                    />
                  )}
                  <ErrorMessage
                    name={field}
                    component="div"
                    className="text-red-400 mt-1 text-sm"
                  />
                </div>
              ))}

                <button
                type="submit"
                disabled={isSending}
                className="bg-lime-500 hover:bg-lime-600 text-black font-semibold px-6 py-2 rounded transition flex items-center justify-center"
                >
                {isSending ? (
                    <span className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></span>
                ) : (
                    "Надіслати"
                )}
                </button>

            </Form>
          </Formik>
        ) : (
          <div className="text-lime-400 mt-10 text-lg">
            Ваше повідомлення успішно надіслано. Дякуємо!
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default SupportPage;
