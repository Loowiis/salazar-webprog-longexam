import { Link } from 'react-router-dom';

const inputClasses =
  'mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-gray-900 focus:bg-gray-50';

const SignInPage = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-light tracking-tight text-gray-900 sm:text-5xl">Sign In</h1>
        <p className="text-base leading-relaxed text-gray-600">
          Access your store account to review orders, saved items, and pickup details.
        </p>
      </div>

      <form className="space-y-6">
        <div>
          <label htmlFor="signin-email" className="block text-sm font-light text-gray-700 mb-2">
            Email Address
          </label>
          <input
            id="signin-email"
            type="email"
            placeholder="student@email.com"
            autoComplete="email"
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="signin-password" className="block text-sm font-light text-gray-700 mb-2">
            Password
          </label>
          <input
            id="signin-password"
            type="password"
            placeholder="Password"
            autoComplete="current-password"
            className={inputClasses}
          />
          <p className="mt-2 text-xs leading-5 text-gray-500">
            Must be at least 8 characters with letters, numbers, and symbols.
          </p>
        </div>

        <div className="flex items-center justify-between gap-4 text-sm">
          <label className="flex items-center gap-2 text-gray-600 cursor-pointer">
            <input type="checkbox" className="h-4 w-4 rounded border-gray-300 accent-gray-900" />
            <span className="font-light">Remember me</span>
          </label>
          <button type="button" className="font-light text-gray-700 transition hover:text-gray-900">
            Forgot Password?
          </button>
        </div>

        <button
          type="submit"
          className="w-full rounded-lg py-4 text-sm font-light tracking-wide bg-black text-white transition-all duration-300 hover:bg-gray-800"
        >
          Sign In
        </button>

        <div className="grid gap-3 pt-2 sm:grid-cols-2">
          <button
            type="button"
            className="w-full rounded-lg py-4 text-sm font-light tracking-wide border border-gray-300 text-gray-700 transition-all duration-300 hover:border-gray-400 hover:bg-gray-50"
          >
            Sign In with Google
          </button>
          <button
            type="button"
            className="w-full rounded-lg py-4 text-sm font-light tracking-wide border border-gray-300 text-gray-700 transition-all duration-300 hover:border-gray-400 hover:bg-gray-50"
          >
            Sign In with Apple
          </button>
        </div>
      </form>

      <div className="border-t border-gray-200 pt-8 text-sm text-gray-600">
        <p className="font-light">
          No account yet?{' '}
          <Link to="/signup" className="font-medium text-gray-900 transition hover:text-gray-700">
            Sign Up
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

export default SignInPage;
