export default function Layout({children}: {children: React.ReactNode}) {
	return (
		<>
			<p>layout Page</p>
			<div>{children}</div>
		</>
	);
}
