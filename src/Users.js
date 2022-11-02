import { useState } from "react";

const Users = () => {
  const [profiles, setProfiles] = useState([
    {
      id: 1,
      name: "John",
      email: "john@example.com",
      phone: "+44 459 999 1234",
      img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHVzZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    },
    {
      id: 2,
      name: "Mavis",
      email: "mavis@example.com",
      phone: "+39 190 231 1010",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60",
    },
    {
      id: 3,
      name: "Kofi",
      email: "kofi@example.com",
      phone: "+233 59 401 0464",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHVzZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    },
  ]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [img, setImg] = useState("");

  const handleImage = (e) => {
    let myImg;
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        myImg = reader.result;
        console.log(myImg);
        setImg(myImg);
      });
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let payload = {
      id: Math.random() * 10000,
      name,
      email,
      img,
      phone,
    };

    setProfiles([...profiles, payload]);

    setTimeout(() => {
      setEmail("");
      setImg("");
      setName("");
      setPhone("");
    }, 3000);
  };
  return (
    <div className="flex gap-3 w-full h-full">
      <div className="w-8/12">
        <p className="font-bold text-2xl flex items-center justify-center">
          Available Users
        </p>
        <div className="flex flex-wrap gap-2 md:gap-4  m-4 ">
          {profiles.map((profile) => (
            <div
              key={profile.id}
              className="w-48 h-56 flex flex-col items-center justify-center border border-gray-300 shadow-2xl cursor-pointer"
            >
              <div>
                <img
                  src={profile.img}
                  alt=""
                  className="object-fit h-14 w-14 rounded-full -mt-8"
                />
              </div>
              <h3 className="font-bold text-xl my-3">{profile.name}</h3>
              <p>{profile.email}</p>
              <p>{profile.phone}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-gray-50 ">
        <p className="font-bold text-2xl flex items-center justify-center">
          Add User
        </p>
        <form className="flex flex-col m-5 gap-5" onSubmit={handleSubmit}>
          <div className="flex gap-5 items-center">
            <label className="font-semibold">Name</label>
            <input
              type="text"
              id="name"
              className="border border-black rounded outline-none px-3 flex-1 p-3"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div className="flex gap-5 items-center">
            <label className="font-semibold">Email</label>
            <input
              type="email"
              id="email"
              className="border border-black rounded outline-none px-3 flex-1 p-3"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="flex gap-3 items-center">
            <label className="font-semibold">Contact</label>
            <input
              type="text"
              id="phone"
              className="border border-black rounded outline-none px-3 flex-1 p-3"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
          </div>
          <div className="flex gap-5">
            <label className="font-semibold">Image</label>
            <input
              type="file"
              accept="image/png, image/jpg, image/jpeg"
              id="img"
              className="border border-black rounded outline-none  flex-1"
              onChange={handleImage}
              value={""}
            />
          </div>
          <button className="bg-blue-500 w-fit py-3 px-8 text-white font-semibold m-auto rounded-full">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Users;
