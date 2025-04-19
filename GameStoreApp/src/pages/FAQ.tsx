import { motion } from "framer-motion";

const FAQ = () => {
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
          ЧАСТІ ЗАПИТАННЯ (FAQ)
        </h1>

        <section className="mb-8">
          <h2 className="text-xl text-lime-400 uppercase tracking-wide mb-2 font-mono">
            ЯК КУПИТИ ГРУ НА GAMEVAULT?
          </h2>
          <p className="text-neutral-400 text-sm leading-relaxed font-mono">
            ВИБЕРІТЬ ГРУ В МАГАЗИНІ, НАТИСНІТЬ «КУПИТИ», ПІСЛЯ ЧОГО ОФОРМІТЬ
            ПОКУПКУ В КОШИКУ. ОПЛАТУ МОЖНА ЗДІЙСНИТИ КАРТКОЮ АБО ЧЕРЕЗ
            ОНЛАЙН-ГАМАНЦІ.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl text-lime-400 uppercase tracking-wide mb-2 font-mono">
            ЯК ДОДАТИ ГРУ ДО СПИСКУ БАЖАНОГО?
          </h2>
          <p className="text-neutral-400 text-sm leading-relaxed font-mono">
            НА СТОРІНЦІ ГРИ НАТИСНІТЬ КНОПКУ «ДОДАТИ В БАЖАНЕ». ВИ ЗМОЖЕТЕ
            ПЕРЕГЛЯНУТИ ОБРАНІ ІГРИ В РОЗДІЛІ «СПИСОК БАЖАНОГО».
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl text-lime-400 uppercase tracking-wide mb-2 font-mono">
            ЩО РОБИТИ, ЯКЩО Я НЕ ОТРИМАВ ГРУ ПІСЛЯ ПОКУПКИ?
          </h2>
          <p className="text-neutral-400 text-sm leading-relaxed font-mono">
            ПЕРЕВІРТЕ ІСТОРІЮ ЗАМОВЛЕНЬ У ВАШОМУ ПРОФІЛІ. ЯКЩО ПРОБЛЕМА НЕ
            ВИРІШИЛАСЬ — ЗВЕРНІТЬСЯ ДО СЛУЖБИ ПІДТРИМКИ ЧЕРЕЗ РОЗДІЛ «КОНТАКТИ».
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl text-lime-400 uppercase tracking-wide mb-2 font-mono">
            ЧИ МОЖУ Я ПОВЕРНУТИ ГРОШІ ЗА ГРУ?
          </h2>
          <p className="text-neutral-400 text-sm leading-relaxed font-mono">
            ТАК, ПРОТЯГОМ 14 ДНІВ З МОМЕНТУ ПОКУПКИ, ЗА УМОВИ, ЩО ГРА НЕ БУЛА
            ЗАВАНТАЖЕНА АБО ЗІГРАНА БІЛЬШЕ НІЖ 2 ГОДИНИ.
          </p>
        </section>
      </motion.div>
    </div>
  );
};

export default FAQ;
