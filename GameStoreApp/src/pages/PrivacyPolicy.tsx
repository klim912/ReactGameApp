import {motion} from "framer-motion";

const PrivacyPolicy = () => {
    return (
      <div className="bg-black  mt-[160px] border-b-4 border-white min-h-screen px-6 py-10 md:px-10">
         <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl mx-auto border-l-4 border-lime-500 pl-6"
      >
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-lime-500">
            Політика конфіденційності
          </h1>
  
          <section className="mb-8">
            <p className="mb-4 text-white">
              Ми поважаємо вашу конфіденційність і прагнемо забезпечити захист персональної інформації. 
              Ця політика описує, яку інформацію ми збираємо, як її використовуємо та які у вас є права.
            </p>
          </section>
  
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-lime-500 mb-2">1. Збір інформації</h2>
            <p className="text-gray-300">
              Ми можемо збирати особисті дані, такі як ім’я, електронна пошта, IP-адреса, інформація про пристрій та дії на сайті.
            </p>
          </section>
  
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-lime-500 mb-2">2. Використання інформації</h2>
            <p className="text-gray-300">
              Зібрана інформація використовується для покращення нашого сервісу, персоналізації контенту, аналітики, обробки замовлень та зворотного зв’язку.
            </p>
          </section>
  
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-lime-500 mb-2">3. Захист даних</h2>
            <p className="text-gray-300">
              Ми вживаємо заходів безпеки для захисту вашої інформації. Ваші дані не передаються третім сторонам без вашої згоди, за винятком випадків, передбачених законом.
            </p>
          </section>
  
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-lime-500 mb-2">4. Ваші права</h2>
            <p className="text-gray-300">
              Ви маєте право запитувати доступ до ваших даних, їхнє виправлення або видалення. Звертайтесь до нас за контактами, зазначеними нижче.
            </p>
          </section>
  
          <p className="mt-10 text-sm text-lime-500 italic">
            Останнє оновлення: 31 березня 2025 року
          </p>
        </motion.div>
      </div>
    );
  };
  
  export default PrivacyPolicy;
  