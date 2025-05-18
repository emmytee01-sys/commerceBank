import React, { useEffect, useState } from 'react';

type User = {
  _id: string;
  email: string;
  username?: string;
  accountNumber: string;
  balance: number;
  isAdmin?: boolean;
  loginEnabled?: boolean;
  transactions?: any[];
};

const AdminDashboard: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [creditForm, setCreditForm] = useState({ accountNumber: '', amount: '', description: '' });
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);

  // Fetch all users
  const fetchUsers = async () => {
    setLoading(true);
    const token = localStorage.getItem('token');
    const res = await fetch('http://localhost:5000/api/admin/users', {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    setUsers(data);
    setLoading(false);
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    fetch('http://localhost:5000/api/admin/users', {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) setUsers(data);
        else setUsers([]);
      });
  }, []);

  // Credit account
  const handleCredit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');
    const token = localStorage.getItem('token');
    const res = await fetch('http://localhost:5000/api/admin/credit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify(creditForm),
    });
    const data = await res.json();
    setMessage(data.message);
    fetchUsers();
  };

  // Enable/disable login
  const handleLoginToggle = async (userId: string, enabled: boolean) => {
    const token = localStorage.getItem('token');
    await fetch('http://localhost:5000/api/admin/user-login', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify({ userId, enabled }),
    });
    fetchUsers();
  };

  // Delete user
  const handleDelete = async (userId: string) => {
    if (!window.confirm('Are you sure you want to delete this user?')) return;
    const token = localStorage.getItem('token');
    await fetch(`http://localhost:5000/api/admin/user/${userId}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchUsers();
  };

  // Approve transfer (example: approve the first unapproved transaction)
  const handleApproveTransfer = async (userId: string, transactionId: string) => {
    const token = localStorage.getItem('token');
    await fetch('http://localhost:5000/api/admin/approve-transfer', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify({ userId, transactionId }),
    });
    fetchUsers();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">Super Admin Dashboard</h1>
      {message && <div className="mb-4 p-2 bg-green-100 text-green-800 rounded">{message}</div>}

      {/* Credit Account Form */}
      <div className="bg-white p-6 rounded shadow mb-8 max-w-xl">
        <h2 className="text-xl font-bold mb-4">Credit Any Account</h2>
        <form onSubmit={handleCredit} className="flex flex-col gap-4">
          <input
            className="p-2 border rounded"
            placeholder="Account Number"
            value={creditForm.accountNumber}
            onChange={e => setCreditForm({ ...creditForm, accountNumber: e.target.value })}
            required
          />
          <input
            className="p-2 border rounded"
            placeholder="Amount"
            type="number"
            value={creditForm.amount}
            onChange={e => setCreditForm({ ...creditForm, amount: e.target.value })}
            required
            min={1}
          />
          <input
            className="p-2 border rounded"
            placeholder="Description"
            value={creditForm.description}
            onChange={e => setCreditForm({ ...creditForm, description: e.target.value })}
          />
          <button className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700" type="submit">
            Credit Account
          </button>
        </form>
      </div>

      {/* Users Table */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-bold mb-4">All Users</h2>
        {loading ? (
          <div>Loading users...</div>
        ) : (
          <table className="min-w-full text-sm">
            <thead>
              <tr>
                <th>Email</th>
                <th>Username</th>
                <th>Account Number</th>
                <th>Balance</th>
                <th>Login Enabled</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(u => (
                <tr key={u._id}>
                  <td>{u.email}</td>
                  <td>{u.username}</td>
                  <td>{u.accountNumber}</td>
                  <td>${u.balance?.toLocaleString()}</td>
                  <td>
                    <button
                      className={`px-2 py-1 rounded ${u.loginEnabled ? 'bg-green-200' : 'bg-red-200'}`}
                      onClick={() => handleLoginToggle(u._id, !u.loginEnabled)}
                    >
                      {u.loginEnabled ? 'Enabled' : 'Disabled'}
                    </button>
                  </td>
                  <td>
                    <button
                      className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
                      onClick={() => handleDelete(u._id)}
                    >
                      Delete
                    </button>
                    {/* Approve first unapproved transfer if exists */}
                    {u.transactions &&
                      u.transactions
                        .filter((tx: any) => tx.type === 'transfer' && !tx.approved)
                        .slice(0, 1)
                        .map((tx: any) => (
                          <button
                            key={tx._id}
                            className="bg-blue-500 text-white px-2 py-1 rounded"
                            onClick={() => handleApproveTransfer(u._id, tx._id)}
                          >
                            Approve Transfer
                          </button>
                        ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;