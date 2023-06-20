import Link from "next/link";

async function fetchRepoContents(name:string) {
    await new Promise((resolve) => setTimeout(resolve, 3000))
    try {
        const response = await fetch(`https://api.github.com/repos/zoheballadin/${name}/contents`);
    console.log(`https://api.github.com/zoheballadin/${name}/contents`)
    const contents = await response.json();
    return contents
    } catch (error) {
         return error
    }
}

export interface DirInterface{
    name: string
}

export default async function RepoDirs(props: DirInterface) {
    const repocontents: any[] = await fetchRepoContents(props.name);
    const dirs: any[] = repocontents.filter(item => item.type === "dir")

  return (
    <>
    <h3>Directories</h3>
    <ul>
        {dirs.map(dir => (
            <li key={dir.path}>
                <Link href={`/code/repos/${props.name}/${dir.path}`}>
                {dir.name}
                </Link>
            </li>
        ))}
    </ul>
    </>
  )
}
