import { motion } from "framer-motion";

const PrivacyPolicy = () => {
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
          ПОЛІТИКА КОНФІДЕНЦІЙНОСТІ
        </h1>

        <section className="mb-8">
          <p className="mb-4 text-neutral-400 text-sm leading-relaxed uppercase tracking-wide font-mono">
            МИ ПОВАЖАЄМО ВАШУ КОНФІДЕНЦІЙНІСТЬ І ПРАГНЕМО ЗАБЕЗПЕЧИТИ ЗАХИСТ
            ПЕРСОНАЛЬНОЇ ІНФОРМАЦІЇ. ЦЯ ПОЛІТИКА ОПИСУЄ, ЯКУ ІНФОРМАЦІЮ МИ
            ЗБИРАЄМО, ЯК ЇЇ ВИКОРИСТОВУЄМО ТА ЯКІ У ВАС Є ПРАВА.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl text-lime-400 uppercase tracking-wide mb-2 font-mono">
            1. ЗБІР ІНФОРМАЦІЇ
          </h2>
          <p className="text-neutral-400 text-sm leading-relaxed font-mono">
            МИ МОЖЕМО ЗБИРАТИ ОСОБИСТІ ДАНІ, ТАКІ ЯК ІМ’Я, ЕЛЕКТРОННА ПОШТА,
            IP-АДРЕСА, ІНФОРМАЦІЯ ПРО ПРИСТРІЙ ТА ДІЇ НА САЙТІ.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl text-lime-400 uppercase tracking-wide mb-2 font-mono">
            2. ВИКОРИСТАННЯ ІНФОРМАЦІЇ
          </h2>
          <p className="text-neutral-400 text-sm leading-relaxed font-mono">
            ЗІБРАНА ІНФОРМАЦІЯ ВИКОРИСТОВУЄТЬСЯ ДЛЯ ПОКРАЩЕННЯ НАШОГО СЕРВІСУ,
            ПЕРСОНАЛІЗАЦІЇ КОНТЕНТУ, АНАЛІТИКИ, ОБРОБКИ ЗАМОВЛЕНЬ ТА ЗВОРОТНОГО
            ЗВ’ЯЗКУ.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl text-lime-400 uppercase tracking-wide mb-2 font-mono">
            3. ЗАХИСТ ДАНИХ
          </h2>
          <p className="text-neutral-400 text-sm leading-relaxed font-mono">
            МИ ВЖИВАЄМО ЗАХОДІВ БЕЗПЕКИ ДЛЯ ЗАХИСТУ ВАШОЇ ІНФОРМАЦІЇ. ВАШІ ДАНІ
            НЕ ПЕРЕДАЮТЬСЯ ТРЕТІМ СТОРОНАМ БЕЗ ВАШОЇ ЗГОДИ, ЗА ВИНЯТКОМ
            ВИПАДКІВ, ПЕРЕДБАЧЕНИХ ЗАКОНОМ.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl text-lime-400 uppercase tracking-wide mb-2 font-mono">
            4. ВАШІ ПРАВА
          </h2>
          <p className="text-neutral-400 text-sm leading-relaxed font-mono">
            ВИ МАЄТЕ ПРАВО ЗАПИТУВАТИ ДОСТУП ДО ВАШИХ ДАНИХ, ЇХНЄ ВИПРАВЛЕННЯ
            АБО ВИДАЛЕННЯ. ЗВЕРТАЙТЕСЬ ДО НАС ЗА КОНТАКТАМИ, ЗАЗНАЧЕНИМИ НИЖЧЕ.
          </p>
        </section>

        <p className="mt-10 text-xs text-lime-400 italic uppercase tracking-wide font-mono">
          ОСТАННЄ ОНОВЛЕННЯ: 31 БЕРЕЗНЯ 2025 РОКУ
        </p>
      </motion.div>
    </div>
  );
};

export default PrivacyPolicy;
