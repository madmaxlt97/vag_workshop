type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div className={`mx-auto w-[90%] max-w-7xl ${className}`}>{children}</div>
  );
}
