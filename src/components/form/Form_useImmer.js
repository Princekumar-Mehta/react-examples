import { useImmer } from "use-immer";
import "/home/troth172/Desktop/prince/react/my-react-app/src/components/form/form.css";
export function Form_useImmer() {
  let [formData, updateFormData] = useImmer({
    name: "Niki de Saint Phalle",
    artwork: {
      title: "Blue Nana",
      city: "Hamburg",
      image: "https://i.imgur.com/Sd1AgUOm.jpg",
    },
  });
  function onChangeForm(field, e) {
    if (Object.keys(formData.artwork).includes(field)) {
      updateFormData((draft) => {
        draft["artwork"][field] = e.target.value;
      });
    } else {
      updateFormData((draft) => {
        draft[field] = e.target.value;
      });
    }
  }
  return (
    <>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        // onChange={(e) => {
        //   onChangeForm(e);
        // }}
        onChange={(e) => {
          onChangeForm("name", e);
        }}
      />
      <br />
      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        value={formData.artwork.title}
        // onChange={(e) => {
        //   onChangeForm(e);
        // }}
        onChange={(e) => {
          onChangeForm("title", e);
        }}
      />
      <br />
      <label htmlFor="city">City</label>
      <input
        type="text"
        name="city"
        value={formData.artwork.city}
        // onChange={(e) => {
        //   onChangeForm(e);
        // }}
        onChange={(e) => {
          onChangeForm("city", e);
        }}
      />
      <br />
      <label htmlFor="image">Image</label>
      <input
        type="text"
        name="image"
        value={formData.artwork.image}
        // onChange={(e) => {
        //   onChangeForm(e);
        // }}
        onChange={(e) => {
          onChangeForm("image", e);
        }}
      />
      <br />
      <br />
      {formData.artwork.title}
      by {formData.artwork.name}
      <br />( located in {formData.artwork.city})
      <br />
      <img
        src={formData.artwork.image}
        alt={`Image of ${formData.artwork.title}`}
      />
    </>
  );
}
