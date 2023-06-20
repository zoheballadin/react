export default function AboutLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <div>
        <h1>This is the about layout</h1>
   
        {children}
      </div>
    )
  }