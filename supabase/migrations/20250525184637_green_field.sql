/*
  # Create signups table

  1. New Tables
    - `signups`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, required, unique)
      - `created_at` (timestamp)
      - `status` (text, default: 'pending')

  2. Security
    - Enable RLS on `signups` table
    - Add policy for inserting new signups
    - Add policy for admins to read all signups
*/

CREATE TABLE IF NOT EXISTS signups (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL UNIQUE,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'pending'
);

ALTER TABLE signups ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can sign up"
  ON signups
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Only admins can view signups"
  ON signups
  FOR SELECT
  TO authenticated
  USING (auth.role() = 'admin');