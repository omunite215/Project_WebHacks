import { describe, it, expect, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useLocalStorage } from './useLocalStorage';

beforeEach(() => localStorage.clear());

describe('useLocalStorage', () => {
  it('uses initial value when storage is empty', () => {
    const { result } = renderHook(() => useLocalStorage('k', 1));
    expect(result.current[0]).toBe(1);
  });

  it('persists updates to localStorage', () => {
    const { result } = renderHook(() => useLocalStorage('k', 1));
    act(() => result.current[1](2));
    expect(result.current[0]).toBe(2);
    expect(JSON.parse(localStorage.getItem('k')!)).toBe(2);
  });

  it('reads existing value from localStorage', () => {
    localStorage.setItem('k', JSON.stringify('hi'));
    const { result } = renderHook(() => useLocalStorage('k', 'default'));
    expect(result.current[0]).toBe('hi');
  });
});
