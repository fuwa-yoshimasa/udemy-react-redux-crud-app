import PropTypes from "prop-types";

const App = () => {
    const profiles = [
        { name: "Taro", age: 10 },
        { name: "Hanako", age: 5 },
        { name: "A", age: 40 },
    ];

    return (
        <>
            {profiles.map((profile, index) => {
                return <User name={profile.name} age={profile.age} key={index} />;
            })}
        </>
    );
};

const User = (props) => {
    return (
        <div>
            User : {props.name} / {props.age}
        </div>
    );
};

User.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number.isRequired,
};

export default App;
