const Contact = () => {
  return (
    <div>
     <h1 className="font-bold text-2xl p-4 m-4">CONTACT US 📲</h1>
      <form>
        <input type="text" className=" border border-black p-2 m-2" placeholder="name" />
         <input type="text" className=" border border-black p-2 m-2" placeholder="Destination" />
        <input type="text" className=" border border-black p-2 m-2" placeholder="message"/>
        <button className=" border border-black p-2 m-2 rounded-lg">
          submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
