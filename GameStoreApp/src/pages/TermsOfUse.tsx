import { motion } from "framer-motion";

const TermsOfUse = () => {
  return (
    <div className="bg-black mt-[190px] border-b-4 border-white min-h-screen px-6 py-10 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl mx-auto border-l-4 border-lime-500 pl-6"
      >
        <h1
          className="text-3xl md:text-4xl font-bold text-lime-400 mb-6 tracking-wider uppercase font-mono
            relative before:content-[''] before:absolute before:inset-x-0 before:bottom-0 before:h-0.5 before:bg-lime-500/50
            before:transform before:transition-transform before:duration-300 hover:before:scale-x-110"
        >
          УМОВИ ВИКОРИСТАННЯ
        </h1>

        <section className="mb-8">
          <p className="mb-4 text-neutral-400 text-sm leading-relaxed uppercase tracking-wide font-mono">
            КОРИСТУЮЧИСЬ ЦИМ ВЕБСАЙТОМ, ВИ ПОГОДЖУЄТЕСЬ ІЗ НАСТУПНИМИ УМОВАМИ.
            УВАЖНО ПРОЧИТАЙТЕ ЇХ ПЕРЕД КОРИСТУВАННЯМ НАШИМ СЕРВІСОМ.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl text-lime-400 uppercase tracking-wide mb-2 font-mono">
            1. ОБЛІКОВИЙ ЗАПИС
          </h2>
          <p className="text-neutral-400 text-sm leading-relaxed font-mono">
            ВИ НЕСЕТЕ ВІДПОВІДАЛЬНІСТЬ ЗА ЗБЕРЕЖЕННЯ КОНФІДЕНЦІЙНОСТІ ОБЛІКОВОГО
            ЗАПИСУ ТА ПАРОЛЯ. МИ НЕ НЕСЕМО ВІДПОВІДАЛЬНОСТІ ЗА ДІЇ, ВИКОНАНІ З
            ВАШОГО АКАУНТА.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl text-lime-400 uppercase tracking-wide mb-2 font-mono">
            2. ПОВЕДІНКА КОРИСТУВАЧА
          </h2>
          <p className="text-neutral-400 text-sm leading-relaxed font-mono">
            ЗАБОРОНЕНО ПУБЛІКУВАТИ АБО ПОШИРЮВАТИ ВМІСТ, ЯКИЙ Є НЕЗАКОННИМ,
            ОБРАЗЛИВИМ, ШКІДЛИВИМ АБО ПОРУШУЄ ПРАВА ІНШИХ КОРИСТУВАЧІВ.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl text-lime-400 uppercase tracking-wide mb-2 font-mono">
            3. ІНТЕЛЕКТУАЛЬНА ВЛАСНІСТЬ
          </h2>
          <p className="text-neutral-400 text-sm leading-relaxed font-mono">
            ВЕСЬ КОНТЕНТ, ВКЛЮЧАЮЧИ ТЕКСТИ, ЗОБРАЖЕННЯ ТА ЛОГОТИПИ, Є ВЛАСНІСТЮ
            GAMEVAULT АБО ВИКОРИСТОВУЄТЬСЯ ЗА ЛІЦЕНЗІЄЮ.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl text-lime-400 uppercase tracking-wide mb-2 font-mono">
            4. ЗМІНИ В УМОВАХ
          </h2>
          <p className="text-neutral-400 text-sm leading-relaxed font-mono">
            МИ ЗАЛИШАЄМО ЗА СОБОЮ ПРАВО ЗМІНЮВАТИ ЦІ УМОВИ В БУДЬ-ЯКИЙ ЧАС.
            ЗМІНИ НАБИРАЮТЬ ЧИННОСТІ З МОМЕНТУ ПУБЛІКАЦІЇ.
          </p>
        </section>

        <p className="mt-10 text-xs text-lime-400 italic uppercase tracking-wide font-mono">
          ОСТАННЄ ОНОВЛЕННЯ: 31 БЕРЕЗНЯ 2025 РОКУ
        </p>
      </motion.div>
    </div>
  );
};

export default TermsOfUse;
