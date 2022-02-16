import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Block from './pages/Block';
import Transaction from './pages/Transaction';
import NotFound from './pages/NotFound';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
import Footer from './components/Footer';

const projectName = process.env.REACT_APP_PROJECT_NAME;

export default function App() {
  console.log('App render');

  return (
    <div className="d-flex flex-column h-100">
      <Header projectName={projectName} />

      <main className="flex-shrink-0 mb-4 position-relative">
        <Container>
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<Block />} />
              <Route path="/block/:number" element={<Block />} />
              <Route path="/transaction/:hash" element={<Transaction />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </ErrorBoundary>
        </Container>
      </main>

      <Footer projectName={projectName} />
    </div>
  );
}
