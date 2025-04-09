import {motion} from "framer-motion";

const FAQ = () => {
    return (
      <div className="bg-black mt-[160px] border-b-4 border-white min-h-screen px-6 py-10 md:px-10">
        <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl mx-auto border-l-4 border-lime-500 pl-6"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-lime-500">Часті запитання (FAQ)</h1>
  
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-lime-500 mb-2">Як купити гру на GameVault?</h2>
            <p className="text-gray-300">
              Виберіть гру в магазині, натисніть «Купити», після чого оформіть покупку в кошику. Оплату можна здійснити карткою або через онлайн-гаманці.
            </p>
          </section>
  
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-lime-500 mb-2">Як додати гру до списку бажаного?</h2>
            <p className="text-gray-300">
              На сторінці гри натисніть кнопку «Додати в бажане». Ви зможете переглянути обрані ігри в розділі «Список бажаного».
            </p>
          </section>
  
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-lime-500 mb-2">Що робити, якщо я не отримав гру після покупки?</h2>
            <p className="text-gray-300">
              Перевірте історію замовлень у вашому профілі. Якщо проблема не вирішилась — зверніться до служби підтримки через розділ «Контакти».
            </p>
          </section>
  
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-lime-500 mb-2">Чи можу я повернути гроші за гру?</h2>
            <p className="text-gray-300">
              Так, протягом 14 днів з моменту покупки, за умови, що гра не була завантажена або зіграна більше ніж 2 години.
            </p>
          </section>
        </motion.div>
      </div>
    );
  };
  
  export default FAQ;
  