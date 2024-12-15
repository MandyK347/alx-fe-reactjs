// src/__tests__/TodoList.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../TodoList';  // Adjust the import path if needed

describe('TodoList Component', () => {
  
  test('renders TodoList with initial todos', () => {
    render(<TodoList />);
    expect(screen.getByText('Buy groceries')).toBeInTheDocument();
    expect(screen.getByText('Walk the dog')).toBeInTheDocument();
    expect(screen.getByText('Clean the house')).toBeInTheDocument();
  });

  test('adds a new todo', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText('Add a new todo');
    const button = screen.getByText('Add Todo');

    fireEvent.change(input, { target: { value: 'Learn React Testing' } });
    fireEvent.click(button);

    expect(screen.getByText('Learn React Testing')).toBeInTheDocument();
  });

  test('toggles the completion status of a todo', () => {
    render(<TodoList />);
    const todo = screen.getByText('Buy groceries');
    
    fireEvent.click(todo);  // Toggle completed status
    expect(todo).toHaveStyle('text-decoration: line-through');

    fireEvent.click(todo);  // Toggle back to not completed
    expect(todo).not.toHaveStyle('text-decoration: line-through');
  });

  test('deletes a todo', () => {
    render(<TodoList />);
    const todo = screen.getByText('Buy groceries');
    const deleteButton = todo.querySelector('button');

    fireEvent.click(deleteButton);

    expect(screen.queryByText('Buy groceries')).not.toBeInTheDocument();
  });
});
