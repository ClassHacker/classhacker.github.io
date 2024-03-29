import './Skills.scss';

const skills = [
  { name: 'React', type: 'framework', weight: 4 },
  { name: 'Express', type: 'framework', weight: 2 },
  { name: 'BitBucket', type: 'tool', weight: 3 },
  { name: 'React-Bootstrap', type: 'framework', weight: 2 },
  { name: 'AWS', type: 'tool', weight: 3 },
  { name: 'Jest', type: 'framework', weight: 2 },
  { name: 'Postman', type: 'tool', weight: 3 },
  { name: 'JUnit', type: 'framework', weight: 2 },
  { name: 'JavaScript', type: 'language', weight: 3 },
  { name: 'Bamboo', type: 'tool', weight: 2 },
  { name: 'Java', type: 'language', weight: 4 },
  { name: 'Mockito', type: 'framework', weight: 2 },
  { name: 'Git', type: 'tool', weight: 2 },
  { name: 'Spring Boot', type: 'framework', weight: 2 },
  { name: 'Node', type: 'tool', weight: 3 },
  { name: 'Python', type: 'language', weight: 3 },
  { name: 'Pytest', type: 'framework', weight: 2 }
];

export function Skills () {
  return (
        <section className="card neumorphism-card-big">
            <h1 className="title">Skills</h1>
            <div id="skills">
                {
                    skills.map((item, i) =>
                      // eslint-disable-next-line react/no-unknown-property
                      (<div key={i} skill-type={item.type} skill-weight={item.weight} data-aos="zoom-in">
                            {item.name}
                        </div>)
                    )
                }
            </div>
        </section>
  );
}
