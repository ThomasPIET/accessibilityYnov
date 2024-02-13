import { redirect } from "next/navigation";

export default function Login() {
  async function redirectHome() {
    "use server";
    redirect("/");
  }

  return (
    <div className="bg-gray-50  h-screen">
      <header className="py-3 bg-gray-50  flex justify-between items-center">
        <img src="./images.png" alt="logo amazon" className="h-10 w-auto" />
        <a
          href="/"
          className="flex-grow flex justify-center text-2xl font-bold text-gray-900"
        >
          Blog
        </a>
      </header>
      <mai className="flex items-center justify-center bg-gray-50 mt-60">
        <form action={redirectHome}>
          <div className="mb-6">
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="mail@mail.fr"
              required
              autofocus
              autocomplete="username"
            />
          </div>
          <div className="mb-6">
            <label
              for="password"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="•••••••••"
              required
              autocomplete="current-password"
              minLength={8}
            />
          </div>
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">
            Login
          </button>

          <div className="flex mt-4">
            <div className=" text-sm font-medium text-gray-900 ">
              <a
                href="/register"
                className="text-blue-600 hover:underline "
              >
                Not register yet ? Click here .
              </a>
            </div>
          </div>
        </form>
      </mai>
      <footer className="fixed bottom-0 py-3 bg-gray-50 ">
        <p className="text-center text-gray-600 ">
          texte du footer
        </p>
      </footer>{" "}
    </div>
  );
}
