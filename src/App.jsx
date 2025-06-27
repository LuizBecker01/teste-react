import "./App.css";

function App() {
  return (
    <div>
      <h1 class="text-3xl font-bold underline">Hello world!</h1>

      <button class="rounded-4xl lg:bg-orange-600 md:bg-red-500 bg-green-500 text-white font-bold py-5 px-3">
        Me clique-me
      </button>

      <form action="https://getform.io/f/bllzxdmb" method="POST" class=" bg-yellow-500 flex flex-col gap-2">
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="text" name="message" />
        <input
          type="hidden"
          name="_gotcha"
          style={{ display: "none !important" }}
        />
        <input
          type="checkbox"
          name="subscribe"
          defaultValue="yes"
          defaultChecked=""
        />
        <input type="hidden" name="subscribe" defaultValue="no" />
        <input
          type="radio"
          name="gender"
          defaultValue="male"
          defaultChecked=""
        />
        <input type="radio" name="gender" defaultValue="female" />
        <input type="radio" name="gender" defaultValue="other" />
        <select name="work-experience">
          <option value="one-year">0-1 years</option>
          <option value="one-five-years">1-5 years</option>
        </select>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default App;
