import { Link } from 'react-router-dom';

const inputClasses =
  'mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-gray-900 focus:bg-gray-50';

const SignUpPage = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-light tracking-tight text-gray-900 sm:text-5xl">Sign Up</h1>
        <p className="text-base leading-relaxed text-gray-600">
          Create a store account for faster checkout, order updates, and pickup details.
        </p>
      </div>

      <form className="space-y-6">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm font-light text-gray-700 mb-2">
              First Name
            </label>
            <input
              id="first-name"
              type="text"
              placeholder="First name"
              autoComplete="given-name"
              className={inputClasses}
            />
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm font-light text-gray-700 mb-2">
              Last Name
            </label>
            <input
              id="last-name"
              type="text"
              placeholder="Last name"
              autoComplete="family-name"
              className={inputClasses}
            />
          </div>
        </div>

        <div>
          <label htmlFor="signup-email" className="block text-sm font-light text-gray-700 mb-2">
            Email
          </label>
          <input
            id="signup-email"
            type="email"
            placeholder="student@email.com"
            autoComplete="email"
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="signup-password" className="block text-sm font-light text-gray-700 mb-2">
            Password
          </label>
          <input
            id="signup-password"
            type="password"
            placeholder="Password"
            autoComplete="new-password"
            className={inputClasses}
          />
          <p className="mt-2 text-xs leading-5 text-gray-500">
            Use a secure password with letters, numbers, and symbols.
          </p>
        </div>

        <button
          type="submit"
          className="w-full rounded-lg py-4 text-sm font-light tracking-wide bg-black text-white transition-all duration-300 hover:bg-gray-800"
        >
          Create Account
        </button>

        <div className="grid gap-3 pt-2 sm:grid-cols-2">
          <button
            type="button"
            className="w-full rounded-lg py-4 text-sm font-light tracking-wide border border-gray-300 text-gray-700 transition-all duration-300 hover:border-gray-400 hover:bg-gray-50"
          >
            Sign Up with Google
          </button>
          <button
            type="button"
            className="w-full rounded-lg py-4 text-sm font-light tracking-wide border border-gray-300 text-gray-700 transition-all duration-300 hover:border-gray-400 hover:bg-gray-50"
          >
            Sign Up with Apple
          </button>
        </div>
      </form>

      <div className="border-t border-gray-200 pt-8 text-sm text-gray-600">
        <p className="font-light">
          Already have an account?{' '}
          <Link to="/signin" className="font-medium text-gray-900 transition hover:text-gray-700">
            Sign In
          </Link>
        </p>
        <p className="mt-4 font-light">
          <Link to="/" className="text-gray-500 hover:text-gray-700 transition-colors duration-300">
            ← Back to Home
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
