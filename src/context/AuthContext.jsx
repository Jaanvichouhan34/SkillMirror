import React, { createContext, useContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem('sm_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = (email) => {
    // Mock login logic
    const initials = email.split('@')[0].substring(0, 2).toUpperCase();
    const userData = { email, initials, name: email.split('@')[0] };
    setUser(userData);
    localStorage.setItem('sm_user', JSON.stringify(userData));
  };

  const signup = (name, email) => {
    // Mock signup logic
    const initials = name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
    const userData = { email, initials, name };
    setUser(userData);
    localStorage.setItem('sm_user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('sm_user');
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
