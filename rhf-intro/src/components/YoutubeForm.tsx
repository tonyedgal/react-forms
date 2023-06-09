import { useState } from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

let renderCount = 0;

const YoutubeForm = () => {
  const form = useForm();
  const { register, control } = form;

  const [render, setRender] = useState("");

  renderCount++;

  return (
    <div>
      <h1>Form ({renderCount / 2})</h1>
      <form>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" {...register("username")} />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...register("email")} />

        <label htmlFor="channel">Channel</label>
        <input type="text" id="channel" {...register("channel")} />

        <label htmlFor="render">Render</label>
        <input
          type="text"
          id="render"
          name="render"
          value={render}
          onChange={(e) => setRender(e.target.value)}
        />

        <button>Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default YoutubeForm;
