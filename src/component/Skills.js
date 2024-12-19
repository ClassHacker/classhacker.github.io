import './Skills.scss';

const skills = [
  { name: 'Java', type: 'language', weight: 4 },
  { name: 'TypeScript', type: 'language', weight: 2 },
  { name: 'Angular', type: 'framework', weight: 4 },
  { name: 'Spring Boot', type: 'framework', weight: 3 },
  { name: 'DynamoDB', type: 'service', weight: 2 },
  { name: 'ChatGPT', type: 'ai', weight: 2 },
  { name: 'Express', type: 'framework', weight: 2 },
  { name: 'CloudFormation', type: 'service', weight: 2 },
  { name: 'Jest', type: 'framework', weight: 1 },
  { name: 'Postman', type: 'tool', weight: 3 },
  { name: 'Lambda', type: 'service', weight: 2 },
  { name: 'JUnit', type: 'framework', weight: 1 },
  { name: 'Claude', type: 'ai', weight: 2 },
  { name: 'JavaScript', type: 'language', weight: 3 },
  { name: 'SQS', type: 'service', weight: 2 },
  { name: 'Bamboo', type: 'tool', weight: 2 },
  { name: 'React', type: 'framework', weight: 4 },
  { name: 'Mockito', type: 'framework', weight: 1 },
  { name: 'Git', type: 'tool', weight: 2 },
  { name: 'Node', type: 'tool', weight: 3 },
  { name: 'Python', type: 'language', weight: 2 },
  { name: 'SNS', type: 'service', weight: 2 },
  { name: 'GitHub Copilot', type: 'ai', weight: 2 }
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
