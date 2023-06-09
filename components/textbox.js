export default function Textbox({ value, onChange }) {
  return (
    <div>
      <label
        htmlFor="assignment"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        Paste your assignment instructions below.
      </label>
      <div className="mt-2">
        <textarea
          rows={4}
          name="assignment"
          id="assignment"
          className="block w-full rounded-xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-4"
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
