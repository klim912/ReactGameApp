import { Link } from "react-router-dom";
import { SiFacebook, SiDiscord, SiX } from "@icons-pack/react-simple-icons";
import { Formik, FormikHelpers, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function Footer() {
  const currentYear = new Date().getFullYear();

  const validationSchema = Yup.object({
    name: Yup.string().required("ВКАЖІТЬ ІМ’Я"),
    message: Yup.string().required("НАПИШІТЬ ПОВІДОМЛЕННЯ"),
  });

  const handleSubmit = (
    values: { name: string; message: string },
    helpers: FormikHelpers<{ name: string; message: string }>
  ) => {
    console.log("Зворотній зв'язок:", values);
    alert("ДЯКУЄМО ЗА ЗВЕРНЕННЯ!");
    helpers.resetForm();
  };

  return (
    <footer className="bg-neutral-950 text-white px-6 py-12 font-mono border-t border-lime-500/30">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        <div>
          <h3 className="text-lime-400 text-base uppercase tracking-wide mb-4">
            ПРО НАС
          </h3>
          <p className="text-neutral-400 leading-relaxed">
            GAME VAULT — ТВОЯ ІГРОВА ПЛАТФОРМА ДЛЯ ВІДКРИТТЯ НОВИХ СВІТІВ,
            ЗБЕРІГАННЯ БІБЛІОТЕКИ ТА ВИГІДНИХ ПОКУПОК.
          </p>
        </div>

        <div>
          <h3 className="text-lime-400 text-base uppercase tracking-wide mb-4">
            КОНТАКТИ
          </h3>
          <Formik
            initialValues={{ name: "", message: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className="flex flex-col gap-4">
              <div>
                <Field
                  name="name"
                  placeholder="ВАШЕ ІМ’Я"
                  className="w-full px-3 py-2 bg-neutral-900/50 border border-lime-500/50 text-lime-400 rounded-sm placeholder-neutral-500 uppercase text-sm
                    focus:outline-none focus:border-lime-500 transition-all duration-300"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-xs mt-1 uppercase"
                />
              </div>

              <div>
                <Field
                  as="textarea"
                  name="message"
                  placeholder="ВАШЕ ПОВІДОМЛЕННЯ"
                  rows={4}
                  className="w-full px-3 py-2 bg-neutral-900/50 border border-lime-500/50 text-lime-400 rounded-sm placeholder-neutral-500 uppercase text-sm
                    resize-none focus:outline-none focus:border-lime-500 transition-all duration-300"
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="text-red-500 text-xs mt-1 uppercase"
                />
              </div>

              <button
                type="submit"
                className="bg-lime-500/10 border border-lime-500 text-lime-400 text-sm px-4 py-2 rounded-sm uppercase
                  hover:bg-lime-500 hover:text-black transition-all duration-300 transform hover:scale-105"
              >
                НАДІСЛАТИ
              </button>
            </Form>
          </Formik>
        </div>

        <div>
          <h3 className="text-lime-400 text-base uppercase tracking-wide mb-4">
            ПОЛІТИКА
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/privacy-policy"
                className="text-neutral-400 hover:text-lime-500 uppercase transition-colors duration-300"
              >
                ПОЛІТИКА КОНФІДЕНЦІЙНОСТІ
              </Link>
            </li>
            <li>
              <Link
                to="/terms-of-use"
                className="text-neutral-400 hover:text-lime-500 uppercase transition-colors duration-300"
              >
                УМОВИ ВИКОРИСТАННЯ
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lime-400 text-base uppercase tracking-wide mb-4">
            ДОПОМОГА
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/faq"
                className="text-neutral-400 hover:text-lime-500 uppercase transition-colors duration-300"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                to="/support"
                className="text-neutral-400 hover:text-lime-500 uppercase transition-colors duration-300"
              >
                СЛУЖБА ПІДТРИМКИ
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex justify-center gap-8 mt-10">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lime-400 hover:text-lime-500 transition-transform duration-300 transform hover:scale-110"
        >
          <SiFacebook size={24} />
        </a>
        <a
          href="https://x.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lime-400 hover:text-lime-500 transition-transform duration-300 transform hover:scale-110"
        >
          <SiX size={24} />
        </a>
        <a
          href="https://discord.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lime-400 hover:text-lime-500 transition-transform duration-300 transform hover:scale-110"
        >
          <SiDiscord size={24} />
        </a>
      </div>

      <p className="text-center text-neutral-500 text-xs mt-8 uppercase tracking-wide">
        © {currentYear} GAME VAULT. УСІ ПРАВА ЗАХИЩЕНО.
      </p>
    </footer>
  );
}

export default Footer;
