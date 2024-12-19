import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
          Jai Shree Yog Sadhna Center, founded by Saroj Sharma in Jaipur, is dedicated to spreading the ancient practice of yoga for physical, mental, and spiritual well-being. The center offers specialized yoga training in Vinyasa, Hatha, and Ashtanga yoga, with classes tailored for individuals of all skill levels. With a serene environment and expert guidance, it is a hub for holistic health and self-discovery.
          </p>
          <p>©Jay Shree Yoga Sadhna Center.</p>
        </div>
        
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contacts</h4>
          <p className="my-5">Jhule lal Temple near basbadanpura Delhi Road Jaipur</p>
          <p>(+01) 9829015244</p>
        </div>
      </div>
      <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Developed by</h4>
          <p className="my-5">Himanshu Gupta</p>
          <p className="my-5">8000739398</p>
          <p>Ullamcorper vivamus</p>
        </div>
    </footer>
  );
};

export default Footer;