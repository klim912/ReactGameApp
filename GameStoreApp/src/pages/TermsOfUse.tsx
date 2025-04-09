import {motion} from "framer-motion";

const TermsOfUse = () => {
    return (
      <div className="bg-black mt-[160px] border-b-4 border-white min-h-screen px-6 py-10 md:px-10">
         <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl mx-auto border-l-4 border-lime-500 pl-6"
      >
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-lime-500">Умови використання</h1>
  
          <section className="mb-8">
            <p className="text-white mb-4">
              Користуючись цим вебсайтом, ви погоджуєтесь із наступними умовами. Уважно прочитайте їх перед користуванням нашим сервісом.
            </p>
          </section>
  
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-lime-500 mb-2">1. Обліковий запис</h2>
            <p className="text-gray-300">
              Ви несете відповідальність за збереження конфіденційності облікового запису та пароля. Ми не несемо відповідальності за дії, виконані з вашого акаунта.
            </p>
          </section>
  
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-lime-500 mb-2">2. Поведінка користувача</h2>
            <p className="text-gray-300">
              Заборонено публікувати або поширювати вміст, який є незаконним, образливим, шкідливим або порушує права інших користувачів.
            </p>
          </section>
  
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-lime-500 mb-2">3. Інтелектуальна власність</h2>
            <p className="text-gray-300">
              Весь контент, включаючи тексти, зображення та логотипи, є власністю GameVault або використовується за ліцензією.
            </p>
          </section>
  
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-lime-500 mb-2">4. Зміни в умовах</h2>
            <p className="text-gray-300">
              Ми залишаємо за собою право змінювати ці умови в будь-який час. Зміни набирають чинності з моменту публікації.
            </p>
          </section>
  
          <p className="mt-10 text-sm text-lime-500 italic">Останнє оновлення: 31 березня 2025 року</p>
        </motion.div>
      </div>
    );
  };
  
  export default TermsOfUse;
  