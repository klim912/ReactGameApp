import { Link } from "react-router-dom";
import { SiFacebook, SiDiscord, SiX } from "@icons-pack/react-simple-icons";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function Footer() {
  const currentYear = new Date().getFullYear();

  const validationSchema = Yup.object({
    name: Yup.string().required("Вкажіть ім’я"),
    message: Yup.string().required("Напишіть повідомлення"),
  });

  const handleSubmit = (
    values: { name: string; message: string },
    { resetForm }: any
  ) => {
    console.log("Зворотній зв'язок:", values);
    alert("Дякуємо за звернення!");
    resetForm();
  };

  return (
    <footer className="bg-black text-white px-6 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        <div>
          <h3 className="font-semibold text-green-500 mb-2">Про нас</h3>
          <p>
            Game Vault — твоя ігрова платформа для відкриття нових світів,
            зберігання бібліотеки та вигідних покупок.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-green-500 mb-2">Контакти</h3>

          <Formik
            initialValues={{ name: "", message: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className="flex flex-col gap-2">
              <div>
                <Field
                  name="name"
                  placeholder="Ваше ім’я"
                  className="px-2 py-1 rounded bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-1 focus:ring-green-500 w-full"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-400 text-sm mt-1"
                />
              </div>

              <div>
                <Field
                  as="textarea"
                  name="message"
                  placeholder="Ваше повідомлення"
                  rows={4}
                  className="px-2 py-1 rounded w-full resize-none bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-1 focus:ring-green-500"
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="text-red-400 text-sm mt-1"
                />
              </div>

              <button
                type="submit"
                className="bg-green-500 text-black font-semibold py-1 rounded hover:bg-green-400 transition cursor-pointer"
              >
                Надіслати
              </button>
            </Form>
          </Formik>
        </div>

        <div>
          <h3 className="font-semibold text-green-500 mb-2">Політика</h3>
          <ul className="space-y-1">
            <li>
              <Link to="/privacy-policy" className="hover:text-green-400 underline">
                Політика конфіденційності
              </Link>
            </li>
            <li>
              <Link to="/terms-of-use" className="hover:text-green-400 underline">
                Умови використання
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-green-500 mb-2">Допомога</h3>
          <ul className="space-y-1">
            <li>
              <Link to="/faq" className="hover:text-green-400 underline">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/support" className="hover:text-green-400 underline">
                Служба підтримки
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex justify-center gap-6 mt-8">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <SiFacebook size={24} className="hover:text-green-400 transition" />
        </a>
        <a href="https://x.com" target="_blank" rel="noopener noreferrer">
          <SiX size={24} className="hover:text-green-400 transition" />
        </a>
        <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
          <SiDiscord size={24} className="hover:text-green-400 transition" />
        </a>
      </div>

      <p className="text-center text-gray-500 text-sm mt-6">
        © {currentYear} Steam Clone. Усі права захищено.
      </p>
    </footer>
  );
}

export default Footer;
