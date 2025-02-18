import { useState, useEffect } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import Panel from '../components/Panel';

const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength) + '...';
};

const KnowledgePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredEntries, setFilteredEntries] = useState([]);

  useEffect(() => {
    const fetchKnowledgeEntries = async () => {
      try {
        const response = await fetch(`/api/knowledge?query=${searchQuery}`);
        const data = await response.json();
        if (Array.isArray(data)) {
          setFilteredEntries(data);
        } else {
          setFilteredEntries([]);
        }
      } catch (error) {
        console.error('Error fetching knowledge entries:', error);
        setFilteredEntries([]);
      }
    };

    fetchKnowledgeEntries();
  }, [searchQuery]);

  return (
    <DashboardLayout>
      <Panel title="Knowledge Base">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 mb-4 border border-zinc-700 rounded"
        />
        <div>
          {filteredEntries.map(entry => (
            <div key={entry._id} className="mb-4 p-4 border border-zinc-700 rounded">
              <h3 className="text-lg font-bold">{entry.title}</h3>
              <p className="mb-4">{truncateText(entry.content, 100)}</p>
              {entry.tags.map(tag => (
                <span className="text-xs uppercase font-bold p-2 bg-blue-400 rounded mr-2"> {tag} </span>
              ))}
            </div>
          ))}
        </div>
      </Panel>
    </DashboardLayout>
  );
};

export default KnowledgePage;