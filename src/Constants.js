const teamContact = [
  {
    id: 1,
    imgURL:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    name: "person",
    position: "mechanic",
  },
  {
    id: 2,
    imgURL:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    name: "person",
    position: "mechanic",
  },
  {
    id: 3,
    imgURL:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    name: "person",
    position: "mechanic",
  },
  {
    id: 4,
    imgURL:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    name: "person",
    position: "mechanic",
  },
];

const benefits = [
  {
    id: 1,
    title: "Customer Satisfaction Guaranteed",
    description:
      "We strive for excellence in every aspect of our service, aiming to exceed your expectations and ensure your complete satisfaction.",
  },
  {
    id: 2,
    title: "Transparent Pricing",
    description:
      "We provide clear, upfront pricing with no hidden fees, so you always know what to expect before we start any work.",
  },
  {
    id: 3,
    title: "Expert Technicians",
    description:
      "Our skilled technicians have extensive experience with a diverse range of vehicles, ensuring that your car is in expert hands.",
  },
];

const contacts = {
  phoneNumber: "(718) 740-3277",
  address: "217-85 98th Ave, Queens Village, NY 11429",
};

const aboutInfo = {
  ourStory:
    "Welcome to RPM NYC! Founded in 1998, we’ve built a reputation for excellence in automotive service and repair. Our journey began with a passion for high-performance vehicles and a commitment to providing top-notch care for every car that comes through our doors.",
  ourMission:
    "At RPM NYC, our mission is to deliver exceptional automotive services with integrity and precision. We strive to exceed our customers’ expectations by combining our expertise with the latest technology to ensure your vehicle performs at its best.",
  vistUs:
    "We’d love to meet you and your vehicle! Stop by our service center to experience the RPM NYC difference.",
};

const serviceInfo = {
  description:
    "RPM NYC specializes in providing high-quality automotive services for a wide range of vehicles, ensuring that each car receives meticulous care and attention. Our services cater to luxury, high-performance, and exotic cars, but we also handle everyday vehicles with the same level of expertise.",
};

const FAQ = [
  {
    id: 1,
    question: "What types of vehicles do you work on?",
    answer:
      "We work on all Asian vehicles and select European and American models",
  },
  {
    id: 2,
    question: "Do you do insurance claims?",
    answer: "Yes we do!",
  },
];

const navItems = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "About", path: "/about" },
  { name: "Team", path: "/team" },
  { name: "Gallery", path: "/gallery" },
  { name: "Support", path: "/support" },
];

const teamDescription =
  "Our skilled technicians are the heart of RPM NYC. With years of experience and a dedication to continuous learning, they handle each vehicle with care and expertise. From routine maintenance to complex repairs, our team is here to keep your car running smoothly.";

export default teamContact;
export {
  navItems,
  teamDescription,
  benefits,
  contacts,
  aboutInfo,
  serviceInfo,
  FAQ,
};
