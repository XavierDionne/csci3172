import React, { useState } from 'react';

const skills = [
  { name: 'JavaScript', category: 'Programming' },
  { name: 'React', category: 'Frontend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'CSS', category: 'Design' },
];

function SkillList() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');

  const filteredSkills = skills.filter(skill =>
    (skill.name.toLowerCase().includes(search.toLowerCase()) ||
    skill.category.toLowerCase().includes(search.toLowerCase())) &&
    (!filter || skill.category === filter)
  );

  return (
    <div className="skill-list">
      <input
        type="text"
        placeholder="Search skills..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="filter-buttons">
        <button onClick={() => setFilter('')}>All</button>
        <button onClick={() => setFilter('Programming')}>Programming</button>
        <button onClick={() => setFilter('Frontend')}>Frontend</button>
        <button onClick={() => setFilter('Backend')}>Backend</button>
        <button onClick={() => setFilter('Design')}>Design</button>
      </div>
      <ul>
        {filteredSkills.map(skill => (
          <li key={skill.name}>{skill.name} ({skill.category})</li>
        ))}
      </ul>
    </div>
  );
}

export default SkillList;
