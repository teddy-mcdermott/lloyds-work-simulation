export default function Form({ onSubmit, children }) {
  return (
    <form className="Form" onSubmit={onSubmit}>
      {children}
    </form>
  );
}