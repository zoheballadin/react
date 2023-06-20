import Link from "next/link"

async function getCourses(){
    const response = await fetch("http://localhost:3000/api/courses");
    const courses: any[] = await response.json()
    return courses
}

export default async function Courses() {
    const courses: any[] = await getCourses();
  return (
    <div className="courses">
        
    </div>
  )
}
