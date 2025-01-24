import User from "./User"
import UserClass from "./UserClass"

const About = () => {
    return <div>
        <h1>about us page</h1>
        <h2>This is about us page</h2>
        <User name={"Vidhi"} location={"Ahmedabad"} contact={"vidhi@gmail.com"} />
        <UserClass name={"Vidhi"} location={"Ahmedabad"} contact={"vidhi@gmail.com"} />
    </div>
}

export default About