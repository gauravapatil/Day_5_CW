import styles from './Main.module.css';
import { useState } from 'react';

const Main_app = () => {
    const [subjects, setSubjects] = useState([]);
    const [subject, setSubject] = useState('');
    const [hours, setHours] = useState(0);

    const handleAdd = (e) => {
        e.preventDefault();
        if (subject && hours > 0) {
            setSubjects([...subjects, { subject, hours }]);
            setSubject('');
            setHours(0);
        }
    }

    const handleIncrease = (index) => {
        const updatedSubjects = subjects.map((item, idx) =>
            idx === index ? { ...item, hours: item.hours + 1 } : item
        );
        setSubjects(updatedSubjects);
    };

    return (
        <div className={styles.container}>
            <form onSubmit={handleAdd}>
                <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Subject"
                />
                <input
                    type="number"
                    value={hours}
                    onChange={(e) => setHours(parseInt(e.target.value, 10))}
                    placeholder="Hours"
                />
                <button type="submit">Add Subject</button>
            </form>

            <ul>
                {subjects.map((item, index) => (
                    <li key={index}>
                        {item.subject} - {item.hours} hours
                        <button onClick={() => handleIncrease(index)}>Increase</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Main_app;
