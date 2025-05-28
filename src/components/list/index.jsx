import { HandshakeOutlined } from "@mui/icons-material";
const List = ({ icon, title, desc }) => {
  return (
    <div className="flex items-start gap-4 p-4 rounded-xl bg-white shadow hover:shadow-md transition">
      <div className="text-blue-600">{icon}</div>
      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600 text-base mt-1">{desc}</p>
      </div>
    </div>
  );
};

export default List;
