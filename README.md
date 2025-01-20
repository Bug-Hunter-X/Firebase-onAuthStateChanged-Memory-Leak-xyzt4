# Firebase onAuthStateChanged Memory Leak

This repository demonstrates a common error in Firebase Authentication where the `onAuthStateChanged` listener is not unsubscribed, leading to a memory leak.  The `authBug.js` file shows the incorrect implementation, and `authBugSolution.js` provides the corrected version.

## Problem
The `onAuthStateChanged` listener continuously listens for authentication state changes.  Without unsubscribing, this listener remains active even when it's no longer needed, consuming resources and potentially causing memory issues, particularly in applications with long lifecycles.  This can lead to performance degradation and crashes.