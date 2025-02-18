const Panel = ({ title, children }) => {
    return (
      <div className="rounded border border-zinc-700 p-4 bg-zinc-800 w-full h-full">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        {children}
      </div>
);
};
  
export default Panel;